# Diagram Creator

This repository contains the second project I will create for the Project Jalasoft course. The project contains a Nodejs Api application that accepts Python code a generates a diagram.

## Instructor Requirements

The following text block contains the necessary steps for building the application. And also, some optional and additional steps.

1. Design Docker image to be able to generate a Diagram (PNG, SVG) from a Python py file.
   - The image needs to have Python.
   - The image needs to have GraphViz.
   - The input and the output will be shared using a volume or something similar.
2. Create a NodeJS REST Service.
   - An endpoint that receives plain text python code and returns an PNG or SVG image.
   - This Service needs to run inside his own Docker Image.
   - Anything additional that you want to add
3. Optionally you can work with an UI Interface

## CLI Instructions

To install software dependencies, run:

```cli
yarn install
```

To check formating styles, run:

```cli
yarn format:check
```

To apply format styles, run:

```cli
yarn format
```
