# TODO List Web Application

This is a simple TODO list web application that allows users to add, view, and remove tasks.

### Features
- Add tasks: Users can input their tasks in the provided input field and add them to the list.
- View tasks: All tasks added by the user are displayed in a list format.
- Remove tasks: Users can remove tasks individually by clicking on the delete icon next to each task.
- Mark tasks as completed: Users can mark tasks as completed by clicking on the checkbox icon next to each task.

### Design
- The application has a responsive design using Bootstrap for layout and styling.
- The input field for adding tasks is positioned on the left side of the screen, while the task list is displayed on the right side.
- Task items are styled with a box shadow for a clean and modern look.
- Completed tasks are visually distinguished with a strike-through effect and a green color for the checkbox icon.

### Implementation
- The application uses JavaScript to handle the addition, removal, and completion of tasks.
- Task data is stored locally using the `localStorage` API to persist tasks between sessions.
- Each task is represented as an object with properties for ID, text, and completion status.
- Task manipulation methods are implemented in the `TodoStorage` class, including adding, removing, and updating tasks.
- Task DOM elements are generated dynamically using JavaScript based on the task data stored in `localStorage`.

### Future Improvements
- Add the ability to edit tasks after they have been added.
- Implement sorting and filtering options for tasks based on different criteria.
- Enhance the user interface with animations and transitions for a smoother user experience.
