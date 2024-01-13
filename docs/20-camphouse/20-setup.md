# How to Set Up Camphouse

## System Requirements

Before you begin, ensure your system meets these requirements:

- Compatible operating system (e.g., Linux, macOS, Windows).
- Node.js installed.
- MongoDB installed for database management.

## Installation Guide

Follow these steps to set up Camphouse:

1. **Clone the Repository**

    ```sh
    gh repo clone VMGWARE/Camphouse
    ```

2. **Environment Setup**

    Navigate to the `Camphouse` directory and set up the environment:

    ```sh
    cd Camphouse
    cp .env.example .env
    # Edit .env with your configuration
    ```

3. **Running the Servers**

    Start the backend and frontend servers:

    ```sh
    # Backend
    cd backend
    npm install
    npm run start

    # Frontend
    cd frontend
    npm install
    npm run serve
    ```

## Docker Setup

Alternatively, use Docker for setup:

1. **Pull the Docker Image**

    ```sh
    docker pull insidiousfiddler/camphouse
    ```

2. **Run the Container**

    Include your database credentials:

    ```sh
    docker run -d -p 8000:80 insidiousfiddler/camphouse -e DB_HOST=<host> ...
    ```

## Post-Installation

Once installed, access Camphouse at `http://localhost:8080`.

---

For more detailed instructions, visit our [Installation Page](https://github.com/VMGWARE/Camphouse#installation).
