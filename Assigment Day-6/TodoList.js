let ToDo = [];
let Completed = [];
let currentId = 1;

function add(title) {
    if (title.trim() === '') {
        return -1; // Return -1 if the title is empty
    }

    let id = currentId++; // Generate a unique id
    ToDo.push({ id: id, title: title }); // Add task to ToDo array
    return id;
}

function remove(id) {
    let index = ToDo.findIndex(task => task.id === id); // Find index of task with given id

    if (index !== -1) {
        ToDo.splice(index, 1); // Remove task from ToDo array
        return true; // Task removed successfully
    }

    return false; // Task not found
}

function update(id, title) {
    let index = ToDo.findIndex(task => task.id === id); // Find index of task with given id

    if (index !== -1) {
        ToDo[index].title = title; // Update task title
        return true; // Task updated successfully
    }

    return false; // Task not found
}

function markAsCompleted(id) {
    let index = ToDo.findIndex(task => task.id === id); // Find index of task with given id

    if (index !== -1) {
        let task = ToDo.splice(index, 1)[0]; // Remove task from ToDo array
        Completed.push(task); // Add task to Completed array
        return true; // Task moved successfully
    }

    return false; // Task not found
}

console.log("Initial ToDo array:", ToDo);

// Adding tasks to ToDo list
console.log("Adding tasks to ToDo:");
console.log("Task added, ID:", add('Learn JavaScript'));
console.log("Task added, ID:", add('Read a book'));
console.log("Updated ToDo array:", ToDo);

// Removing a task from the list
console.log("Removing task from ToDo:");
console.log("Task removed:", remove(1));
console.log("Updated ToDo array:", ToDo);

// Updating tasks
console.log("Updating task in ToDo:");
console.log("Task updated:", update(2, 'Learn Node.js'));
console.log("Updated ToDo array:", ToDo);

// Marking a task complete
console.log("Marking task as completed:");
console.log("Task marked as completed:", markAsCompleted(2));
console.log("Completed tasks:", Completed);
console.log("Updated ToDo array:", ToDo);
