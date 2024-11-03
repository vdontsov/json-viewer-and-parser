# JSON Viewer and Editor

## Project Overview

This project is a test assignment for a company. It is a high-performance JSON viewer and editor that allows users to load, view, and manipulate large JSON data files without compromising the responsiveness of the user interface. The application leverages the power of **Web Workers** for handling data-intensive operations such as sorting and filtering, ensuring that the main JavaScript thread remains unblocked and the user experience stays smooth.

## Features

- **Load Large JSON Files**: Easily upload and view JSON files containing thousands or even millions of entries.
- **Real-Time Filtering and Sorting**: Use intuitive tools to filter and sort JSON data by various fields.
- **Web Worker Integration**: All heavy operations like sorting and filtering are offloaded to Web Workers, keeping the main thread free for UI rendering and interaction.
- **Inline Editing**: Edit JSON entries inline with simple input elements, supporting strings, numbers, dates, and booleans.
- **Responsive Interface**: The application is designed to handle large data sets while maintaining an interactive and fluid user experience.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: Ensures type safety and improves code quality.
- **Redux Toolkit**: Manages state effectively across the application.
- **Web Workers**: Offloads intensive data operations to keep the main thread responsive.
- **CSS Modules**: Provides scoped CSS for component-based styling.

## Advantages

- **High Performance**: Operations on large data sets do not block the main JavaScript thread, thanks to Web Workers.
- **Scalability**: The app can handle JSON files with thousands or millions of entries.
- **User-Friendly**: Intuitive UI for sorting, filtering, and editing JSON data.
- **Modular Code**: Easy to maintain and extend with additional features.

## Installation and Setup

Follow these steps to get the project up and running locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/vdontsov/json-viewer-and-parser
   cd json-viewer-and-parser
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:8000`.

## Usage Instructions

1. **Load a JSON File**:
   - Click the "Upload JSON" button and select a JSON file to load it into the viewer.
2. **View and Navigate**:
   - Scroll through the loaded data and use the pagination controls if applicable.
3. **Filter and Sort**:
   - Use the toolbar to filter or sort the data based on the available fields.
4. **Edit Data Inline**:
   - Click the edit icon next to a data entry to modify its value directly within the application.
5. **Export Data**:
   - Click the "Export JSON" button to download the modified JSON data.

## License

This project is licensed under the [MIT License](LICENSE).
