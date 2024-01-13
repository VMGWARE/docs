# What is Camphouse?

## Introduction

Camphouse is a simple, open-source, and self-hosted social media platform, designed for ease of use and straightforward deployment. Initially launched as Aqurilla, the platform underwent a rebranding in 2023 and emerged as Camphouse.

## Features

Camphouse stands out with its user-friendly design and robust functionality. The platform includes features such as:

- Social media basics: posting, commenting, and liking.
- Enhanced privacy and user control.
- Streamlined interface for an intuitive user experience.

## Technology Stack

Built using:

- **Node.js**: Offers a scalable and efficient server-side solution.
- **MongoDB**: Provides a flexible, NoSQL database system.
- **Vue.js**: Ensures a reactive and component-driven frontend.

## How to Use

Camphouse is designed to be easy to use and deploy. The platform is available as a Docker image, which can be run on any system with Docker installed. The image can be pulled from Docker Hub using the following command:

```bash
docker pull insidiousfiddler/camphouse
```

Once the image has been pulled, it can be run using the following command:

```bash
docker run -p 80:80 insidiousfiddler/camphouse
```

An important thing to note is that Camphouse DOES NOT support running outside of a Docker container. While it is possible to run the platform without Docker, it is not recommended and is not supported.

For more information on deploying/setting up Camphouse, go to [How to Setup Up Camphouse](20-setup.md).

## CPU Architecture Support

Camphouse is currently only available for linux/amd64 systems. Support for other architectures should be possible, but is not currently available.

## Community and Contribution

The Camphouse community is at the heart of its ongoing development. Contributions are welcome, whether in the form of code, bug reports, or feature suggestions.

---

For more information on contributing, see our [Contributor's Guide](https://github.com/VMGWARE/Camphouse/blob/main/CONTRIBUTING.md).
