#!/usr/bin/env node
// The site build: `npm run build` (also what Netlify runs).
//
// Runs the data steps below in order, then Hugo. Arguments are passed to Hugo:
//   npm run build                                   # production build into public/
//   npm run build -- --baseURL "$DEPLOY_PRIME_URL"  # Netlify previews and branch deploys
//   npm run build -- -d /tmp/out                    # build somewhere else
//   npm run build -- --data-only                    # data steps only (e.g. before `hugo server`)
//
// To add a step: write a module exporting an async function that returns true on
// success and false to stop the build, and add it to STEPS.

import { spawn } from "node:child_process";
import { fetchChangelog } from "./fetch-changelog.mjs";

const STEPS = [
  ["changelog", fetchChangelog],
];

const args = process.argv.slice(2);
const dataOnly = args.includes("--data-only");
const hugoArgs = args.filter(a => a !== "--data-only");

async function main() {
  for (const [name, step] of STEPS) {
    if (!(await step())) {
      console.error(`build: step "${name}" failed, stopping`);
      return 1;
    }
  }
  if (dataOnly) return 0;

  console.log(`build: hugo ${hugoArgs.join(" ")}`.trim());
  return new Promise(done => {
    spawn("hugo", hugoArgs, { stdio: "inherit" })
      .on("error", err => { console.error(`build: can't run hugo (${err.message})`); done(1); })
      .on("exit", (code, signal) => done(code ?? (signal ? 1 : 0)));
  });
}

process.exitCode = await main();
