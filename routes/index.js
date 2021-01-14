var express = require('express');
const bodyParser = require("body-parser");
var router = express.Router();


const connect = require('../utils/sql');



router.get('/', (req,res)=>{
  //console.log("at the main route");
  connect.getConnection((err, connection) => {
    if (err){
      return 
      console.log(error.message);
  }

    let query = `SELECT
    project.*,
    f.field_name AS field_name
    FROM
    tbl_projects project
    LEFT JOIN tbl_link_fields link ON
    project.projects_id = link.proj_id
    LEFT JOIN tbl_fields f ON
    link.fields_id = f.field_id
    order by RAND();`;

    connect.query(query, (err, result) => {
      connection.release();
      res.render("home", { project: result });
  
    
   
    
    }); 
 });
})



router.get('/portfolio/:id', (req, res)=> {
  console.log("hit a dynamic route");
  console.log(req.params.id);
  query = `SELECT
  project.*,
  GROUP_CONCAT(t.tools_name) AS tool_name,
  GROUP_CONCAT(t.tools_icon) as tool_icon
FROM
  tbl_projects project
LEFT JOIN tbl_link_tools link ON
  project.projects_id = link.proj_id
LEFT JOIN tbl_tools t ON
  t.tools_id = link.tools_id
WHERE
  ID = ${req.params.id};`;
  // console.log("we are getting data");
  connect.query(query, (err, result) => {
    if (err) {
      throw err;
      console.log(err);
    }

    result[0].link = result[0].link.split(",").map(link => {
      return link;
    });
    result[0].tool_name = result[0].tool_name.split(",").map(tool => {
      return tool;
    });
    result[0].tool_icon = result[0].tool_icon.split(",").map(icon => {
      return icon;
    });

    console.log(result);
    res.json(result[0]);
  });
});


module.exports = router;