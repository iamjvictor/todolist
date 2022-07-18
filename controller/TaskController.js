const Task = require("../models/Task");

let message = "";
let type= "";

const getAll = async (req, res) => {
  try {    
      setTimeout(() => {
        message = "";
      
      }, 500);
      const taskList= await Task.findAll({});
      return res.render("index", {
        taskList,
        task: null,
        taskDelete: null,
        message,
        type
      });
        
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
  
};

const getById = async(req,res) =>{
  try {
    
    const task = await Task.findOne({ where: { id: req.params.id } });
  const taskList= await Task.findAll({});
  res.render("index",{task, taskList, taskDelete: null, message, type} );
  } catch (error) {
    res.status(500).send({ error: err.message });
    
  }
  
};

const createTask = async (req, res) => {
  const task = req.body;
  if (!task.task) {
    message = "Type a task before adding it"
    type = "danger"
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    message = "Task successfully added"
    type = "success"
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const updateTask = async (req,res) =>{
try {
 
  const task = req.body;
  await Task.update(task, {where: {id: req.params.id}});
  message = "Task successfully updated"
    type = "success"
  res.redirect("/")  
} catch (err) {
  res.status(500).send({ error: err.message });

}
};

const deleteTask = async(req,res) =>{
try {
  
  await Task.destroy({where: {id: req.params.id}}).then(function(){
    message = "Task successfully deleted"
    type = "success"
  res.redirect("/")
  })} catch (err) {
  res.status(500).send({ error: err.message });
}
};

module.exports = {
  getAll,
  createTask,
  getById,
  updateTask,
  deleteTask,
  
 
  
};
