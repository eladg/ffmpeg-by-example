import { marked } from "./vendor/marked.esm.js";
import DOMPurify from "./vendor/purify.es.mjs";

const VERSION = "1.0";
const DRAFT_KEY = "ffmpegbyexample:contribute-draft";
const PULLS_URL = "https://github.com/eladg/ffmpeg-by-example/pulls";

const MEDIA = {
  "picture":       { hint: "Link to an image hosted elsewhere (PNG, JPG, GIF or WebP).", placeholder: "https://example.com/output.png" },
  "video-url":     { hint: "Link to a video file hosted elsewhere (MP4 or WebM).",        placeholder: "https://example.com/output.mp4" },
  "youtube-embed": { hint: "A YouTube link or video ID, e.g. HEARpyUdNFs.",              placeholder: "https://www.youtube.com/watch?v=HEARpyUdNFs" },
  "audio":         { hint: "Link to an audio file hosted elsewhere (MP3, M4A or OGG).",   placeholder: "https://example.com/output.mp3" },
};

const form = document.getElementById("cf-form");
const review = document.getElementById("cf-review");
const $ = (id) => document.getElementById(id);
const field = (name) => form.elements[name];
const value = (name) => field(name).value.trim();

const generateNewId = () => {
  return Math.random().toString(36).substr(2, 8).toUpperCase();
};

const isHttpUrl = (text) => {
  try {
    return ["http:", "https:"].includes(new URL(text).protocol);
  } catch {
    return false;
  }
};

const youtubeId = (text) => {
  if (/^[\w-]{11}$/.test(text)) {
    return text;
  }
  const match = text.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([\w-]{11})/);
  return match ? match[1] : null;
};

const exampleType = () => form.querySelector('input[name="example_type"]:checked').value;

// the value sent as example_player_data: a URL, a YouTube id, or null for no-preview
const mediaValue = () => {
  const type = exampleType();
  const text = value("example_player_data");
  if (type === "no-preview" || !text) {
    return null;
  }
  return type === "youtube-embed" ? youtubeId(text) : text;
};

// ---------------------------------------------------------------- validation

const rules = {
  terminal_command: () => value("terminal_command").length > 10 ? null : "Enter the full FFmpeg command (at least 11 characters).",
  title:            () => value("title").length >= 10 ? null : "Give your example a title of at least 10 characters.",
  description:      () => value("description").length >= 30 ? null : "Describe the command in at least 30 characters.",
  category:         () => value("category") ? null : "Pick a category, or type a new one.",
  tag1:             () => value("tag1") ? null : "Add at least one tag.",
  example_player_data: () => {
    const type = exampleType();
    const text = value("example_player_data");
    if (type === "no-preview") return null;
    if (!text) return "Add a link, or choose No preview.";
    if (type === "youtube-embed") return youtubeId(text) ? null : "Enter a YouTube link or an 11-character video ID.";
    return isHttpUrl(text) ? null : "Enter a full link starting with https://";
  },
  author_name:      () => value("author_name").length >= 3 ? null : "Enter your name (at least 3 characters).",
  author_email:     () => !value("author_email") || field("author_email").checkValidity() ? null : "Enter a valid email address, or leave it empty.",
};

// the error element next to each field is #<field id>-error
const errorElement = (name) => $(`${field(name).id}-error`);

const showError = (name, message) => {
  const input = field(name);
  const error = errorElement(name);
  input.setAttribute("aria-invalid", message ? "true" : "false");
  error.textContent = message || "";
  error.hidden = !message;
};

const validateField = (name) => {
  const message = rules[name]();
  showError(name, message);
  return !message;
};

const validateAll = () => {
  const invalid = Object.keys(rules).filter(name => !validateField(name));
  if (invalid.length) {
    field(invalid[0]).focus();
  }
  return invalid.length === 0;
};

// ---------------------------------------------------------------- preview

const renderMedia = () => {
  const container = $("cf-p-media");
  const type = exampleType();
  const media = mediaValue();

  container.replaceChildren();
  container.hidden = !media;
  if (!media) {
    return;
  }

  let el;
  if (type === "picture") {
    el = Object.assign(document.createElement("img"), { src: media, alt: value("title") });
  } else if (type === "video-url") {
    el = Object.assign(document.createElement("video"), { src: media, controls: true, preload: "metadata" });
  } else if (type === "audio") {
    el = Object.assign(document.createElement("audio"), { src: media, controls: true, preload: "metadata" });
  } else if (type === "youtube-embed") {
    el = Object.assign(document.createElement("iframe"), {
      src: `https://www.youtube-nocookie.com/embed/${media}`,
      title: "YouTube video",
      allowFullscreen: true,
    });
  }
  container.append(el);
};

const renderPreview = () => {
  $("cf-p-title").textContent = value("title");
  $("cf-p-command").textContent = value("terminal_command");
  $("cf-p-description").innerHTML = DOMPurify.sanitize(marked.parse(value("description")));

  const email = value("author_email");
  $("cf-p-author").textContent = `by ${value("author_name")}${email ? ` <${email}>` : ""}`;

  const tags = ["tag1", "tag2", "tag3"].map(value).filter(Boolean);
  $("cf-p-tags").textContent = `tags: ${tags.map(tag => `#${tag.toLowerCase()}`).join(" ")}`;

  renderMedia();
};

const updateMediaField = () => {
  const type = exampleType();
  const config = MEDIA[type];
  $("cf-media-field").hidden = !config;
  if (config) {
    $("cf-media-hint").textContent = config.hint;
    field("example_player_data").placeholder = config.placeholder;
  }
  showError("example_player_data", null);
};

// ---------------------------------------------------------------- steps

// "details" shows the form, "review" shows the preview with the submit button
const showStep = (step) => {
  const reviewing = step === "review";
  form.hidden = reviewing;
  review.hidden = !reviewing;
  $("cf-steps-details").toggleAttribute("aria-current", !reviewing);
  $("cf-steps-review").toggleAttribute("aria-current", reviewing);
  $(reviewing ? "cf-steps-review" : "cf-steps-details").setAttribute("aria-current", "step");
  if (reviewing) {
    // stop media from the previous preview before replacing it
    $("cf-p-media").replaceChildren();
    renderPreview();
  } else {
    $("cf-p-media").replaceChildren();
  }
  window.scrollTo({ top: 0 });
};

const goToReview = () => {
  setStatus("cf-form-status", "");
  if (!validateAll()) {
    setStatus("cf-form-status", "error", "Please fix the highlighted fields.");
    return;
  }
  setStatus("cf-review-status", "");
  history.pushState({ step: "review" }, "", "#preview");
  showStep("review");
};

// leaving the preview goes back through history, so the browser's back button does the same
const goToDetails = () => {
  if (history.state && history.state.step === "review") {
    history.back();
  } else {
    showStep("details");
  }
};

window.addEventListener("popstate", (event) => {
  const wantsReview = event.state && event.state.step === "review";
  showStep(wantsReview && Object.keys(rules).every(name => !rules[name]()) ? "review" : "details");
});

// ---------------------------------------------------------------- draft

const FIELDS = ["terminal_command", "title", "description", "category", "tag1", "tag2", "tag3",
                "example_player_data", "author_name", "author_email"];

const saveDraft = () => {
  const draft = Object.fromEntries(FIELDS.map(name => [name, field(name).value]));
  draft.example_type = exampleType();
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  } catch {
    // storage unavailable (private mode, blocked): the form still works without a draft
  }
};

const loadDraft = () => {
  try {
    const draft = JSON.parse(localStorage.getItem(DRAFT_KEY) || "null");
    if (!draft) {
      return;
    }
    FIELDS.forEach(name => { field(name).value = draft[name] || ""; });
    const radio = form.querySelector(`input[name="example_type"][value="${CSS.escape(draft.example_type || "")}"]`);
    if (radio) {
      radio.checked = true;
    }
  } catch {
    // ignore a missing or corrupt draft
  }
};

const clearDraft = () => {
  try {
    localStorage.removeItem(DRAFT_KEY);
  } catch {
    // nothing to clear
  }
};

const resetForm = () => {
  clearDraft();
  form.reset();
  Object.keys(rules).forEach(name => showError(name, null));
  updateMediaField();
};

// ---------------------------------------------------------------- submit

const setStatus = (id, kind, html) => {
  const status = $(id);
  status.className = `cf-status cf-status--${kind}`;
  status.innerHTML = html || "";
  status.hidden = !html;
};

const escapeHtml = (text) => {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
};

const submit = async () => {
  const postData = {
    id: generateNewId(),
    version: VERSION,
    enabled: true,
    example_type: exampleType(),
    example_player_data: mediaValue(),
    title: value("title"),
    description: value("description"),
    author_name: value("author_name"),
    author_email: value("author_email") || null,
    terminal_command: value("terminal_command"),
    categories: [ value("category") ],
    tags: [ value("tag1"), value("tag2") || null, value("tag3") || null ],
  };

  const button = $("cf-submit");
  button.disabled = true;
  button.textContent = "Opening pull request…";
  $("cf-back").disabled = true;
  setStatus("cf-review-status", "");

  try {
    const response = await fetch(form.dataset.submitUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      body: JSON.stringify(postData),
    });
    const data = await response.json().catch(() => null);

    if (!response.ok) {
      const error = (data && data.message) || `HTTP ${response.status}`;
      setStatus("cf-review-status", "error", `Your example wasn't submitted: ${escapeHtml(error)}. Your draft is saved, so you can try again.`);
      return;
    }

    resetForm();
    button.hidden = true;
    $("cf-back").hidden = true;
    $("cf-another").hidden = false;
    setStatus("cf-review-status", "success",
      `Thank you! Your example was submitted as a pull request. ` +
      `<a href="${PULLS_URL}" target="_blank" rel="noopener">See it on GitHub</a>.`);
  } catch (error) {
    console.error(error);
    setStatus("cf-review-status", "error", "Something went wrong while submitting. Check your connection and try again, or reach out on Discord.");
  } finally {
    button.disabled = false;
    button.textContent = "Open pull request";
    $("cf-back").disabled = false;
  }
};

// ---------------------------------------------------------------- wiring

form.addEventListener("input", (event) => {
  const name = event.target.name;
  // clear an error as soon as the field becomes valid; new errors wait for blur or "Preview"
  if (rules[name] && event.target.getAttribute("aria-invalid") === "true") {
    validateField(name);
  }
  if (name === "example_type") {
    updateMediaField();
  }
  saveDraft();
});

form.addEventListener("focusout", (event) => {
  const name = event.target.name;
  if (rules[name] && event.target.value.trim()) {
    validateField(name);
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  goToReview();
});

$("cf-back").addEventListener("click", goToDetails);
$("cf-submit").addEventListener("click", submit);

$("cf-another").addEventListener("click", () => {
  $("cf-another").hidden = true;
  $("cf-submit").hidden = false;
  $("cf-back").hidden = false;
  setStatus("cf-review-status", "");
  history.replaceState(null, "", location.pathname);
  showStep("details");
});

// a reload always starts on the form, with the draft restored
history.replaceState(null, "", location.pathname);
loadDraft();
updateMediaField();
showStep("details");
