# viewsight-camera-app

# ViewSight Camera App

ViewSight is an innovative mobile application that connects to your device’s camera, films what it sees, and identifies objects and scenes using advanced machine learning algorithms. It's designed to enrich user experiences by providing instant information and interacting with their environment in real-time.

## Screens

### Main Camera Screen
Serves as the primary interface where users can view through the camera and receive real-time annotations on objects and scenes the camera identifies.

- **Behavior:** The camera is activated upon app launch, displaying a live feed. Real-time object and scene detection are displayed as overlay texts or icons on the screen.
- **Layout:** Clean layout focusing on the camera view. Key functional icons such as settings, flash control, and gallery view are minimally designed and placed at the edges for maximum viewability.

### Settings Screen
Allows users to customize app settings such as detection sensitivity, feedback types (audio or visual), and language preferences.

- **Behavior:** A simple list view of settings options with toggles and dropdown menus for customization.
- **Design:** Continues the light, clean aesthetic with clear, visually intuitive controls. Text and important toggle controls use the vibrant accent color to guide the user’s attention effectively.

## Components

### Camera Access Module
Manages user permissions and access to the device camera.

- **Behavior:** Requests camera permission on the first launch; remembers the choice for subsequent access.
- **Design:** Pop-up window with a concise explanation of why camera access is needed, employing a clear ‘Allow’ button in a standout color.

### Real-Time Object Detection
Utilizes machine learning to analyze the camera feed and identify objects and scenes.

- **Behavior:** Operates continuously as the camera is active. Detected items are recognized and labeled in real-time.
- **Design:** Detection labels appear as semi-transparent overlays on the camera feed, ensuring they do not obstruct the view. Key identified objects are highlighted with vibrant colors.

### Feedback Mechanism
Provides user feedback via visual cues or audio, based on settings.

- **Behavior:** Visual feedback shows labels directly on the screen while audio feedback provides verbal descriptions of detected objects.
- **Design:** Audio feedback controls are simple, with an easy toggle located in the settings. Visual labels use concise, legible typography.

### Gallery Integration
Displays recently captured images and videos with detected information tags.

- **Behavior:** Thumbnails of captured media are displayed in a grid layout; tapping them shows more details and detected labels.
- **Design:** Maintains a clean design with thumbnails outlined with minimal borders. Selected items are highlighted using the app’s accent color.

## Design Principles Applied

- **Light Base and Strategic Colors:** Employs a primarily light color scheme that enhances the visibility of camera feed and overlay annotations. Vibrant colors are used selectively to draw attention to important elements like settings toggles and detection labels.

- **Typography and Visual Hierarchy:** Clear, concise typography is used for textual overlays to ensure they are readable at a glance without distracting from the main camera view.

- **Use of Whitespace:** Strategic use of space around icons and labels on the camera screen ensures a clean, uncluttered look while maintaining functionality.

- **Simple, Top-Aligned Navigation Bar:** Housing essential features like settings and gallery view, designed for quick access without interfering with the camera’s visual feed.

`
- **Emphasize Key Information:** The use of size, color, and placement to highlight detected items effectively helps users focus on the most important data points quickly.


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/viewsight-camera-app.git
cd viewsight-camera-app
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
