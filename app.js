const nodeHtmlToImage = require("node-html-to-image");
const fs = require("fs");
const font2base64 = require("node-font2base64");

// Fonts
const _data = font2base64.encodeToDataUrlSync("./Lato-Light.ttf");

// Images
const image = fs.readFileSync("./logo.jpeg");
const base64Image = new Buffer.from(image).toString("base64");
const dataURI = "data:image/jpeg;base64," + base64Image;

// Other
const fileName = "./output.png";

const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    *{
        margin: 0;
        padding: 0;
    }
        @font-face {
            font-family: 'Lato';
            src: url(${_data}) format('woff2');
        }

        body {
            width: 350px;
            height: 250px;
            font-family: 'Lato';
            padding: 20px;
            background-color: #fafafa;
            
        }
        .title{
            font-size: 32px;
            font-weight: bold;
            
        }

        .lead{
            font-size: 16px;
            
        }
        .img-logo{
            width: 150px;
            height: 150px;
            margin: 0 auto;
            border-radius: 12px;
            float: left;
        }
    </style>
</head>

<body>
    <article>
        <img class="img-logo"  src="{{imageSource}}" />
        <h1 class="title">Hello world!</h1>
        <p class="lead">This is a very wonderful message from the far east to the west coast of America</p>
        <blockquote>
        By Bruno Already
        </blockquote>

        <date>October,22,2021</date>
    </article>
</body>

</html>`;

nodeHtmlToImage({
  output: fileName,
  html: html,
  content: { imageSource: dataURI },
});
