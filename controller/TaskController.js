const Task = require("../models/Task");


const getAll = async (req, res) => {
  try {    
      const taskList= await Task.findAll({});
      return res.render("index", {taskList, task: null });
        
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
  
};

const getById = async(req,res) =>{
  try {
    const task = await Task.findOne({ where: { id: req.params.id } });
  const taskList= await Task.findAll({});
  res.render("index",{task, taskList} );
  } catch (error) {
    res.status(500).send({ error: err.message });
    
  }
  
};


const createTask = async (req, res) => {
  const task = req.body;
  if (!task.task) {
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const updateTask = async (req,res) =>{
try {
  const task = req.body;
  await Task.updateOne(task, {where: {id: req.params.id}});
  res.redirect("/")  
} catch (err) {
  res.status(500).send({ error: err.message });

}
};

module.exports = {
  getAll,
  createTask,
  getById,
  updateTask,
  
 
  
};
