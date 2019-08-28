# s2i, slide-to-image

> A specialized tool to save training slides from html into png

NOTE: currently streamlined for my Kubernetes Mastery course

Usage:

`docker run -v $(pwd):/i bretfisher/s2i 1 10`

This will run the s2i image, and download slides 1-10 into the current
working directory on your machine from https://slides.kubernetesmastery.com

