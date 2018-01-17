const Todo = require('../models/todo.model');

module.exports = {
    create(req, res) {
        Todo.create({
            desc: req.body.desc,
            priority: req.body.priority,
            isCompleted: req.body.isCompleted,
            lastUpdated: req.body.lastUpdated
        }, (err, savedTodo) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (res.status(200)) {
                return res.status(200).json(savedTodo);
            }
        });
    },

    find(req, res) {
        Todo.find({}, (err, todos) => {
            if (err) {
                return res.status(404).send(err)
            }
            return res.status(200).json(todos);
        });
    },

    delete(req, res) {
        if (!req.params.id) {
            return res.status(400).send({ err: 'Invalid Id or Bad Request' });
        }
        Todo.findByIdAndRemove({ _id: req.params.id }, (err, todo) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (!todo) {
                return res.status(404).send({ err: 'unable to find the todo' });
            }
            if (res.status(200)) {
                return res.status(200).json(req.params.id);
            }
        })
    },

    updateAll(req, res) {
        if (!req.params.id) {
            return res.status(400).send({ err: 'Invalid Id or Bad Request' });
        }
        let updatedTodo = {};
        if (req.req.desc) {
            updatedTodo.desc = req.req.desc;
        }
        if (req.req.priority) {
            updatedTodo.priority = req.req.priority;
        }
        if (req.req.isCompleted) {
            updatedTodo.isCompleted = req.req.isCompleted;
        }
        Todo.findByIdAndUpdate(req.params.id, updatedTodo, (err, todo) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).json(todo);
        });
    },

    update(req, res) {
        if (!req.params.id) {
            return res.status(400).send({ err: 'Invalid Id or Bad Request' });
        }
        let updatedTodo = {};

        if (req.body.isCompleted !== undefined) {
            updatedTodo._id = req.params.id;
            updatedTodo.isCompleted = req.body.isCompleted;
            updatedTodo.lastUpdated = req.body.lastUpdated;
        }
        Todo.findByIdAndUpdate({ _id: req.params.id }, updatedTodo, (err, todo) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (res.status(200)) {
                return res.status(200).json(updatedTodo);
            }
        });
    }
}