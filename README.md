# Source of www.gariany.com

## Current Super Lazy Deployment:

```
aws --profile aws_gariany s3 sync public/ s3://gariany.com/
aws --profile aws_gariany cloudfront create-invalidation --distribution-id "E1OEXPS7LRFGE" --paths "/*"
```


## My Wish List & TODO List:

1. Fix hebrew
1. Emoji for category on list view
1. Better about page
1. ART CV
1. Better Deployment: https://github.com/bep/s3deploy
1. Make all posts folders

## Needed writing:

-> Clients: Polyverse Music
-> Marcel for the Art Mae