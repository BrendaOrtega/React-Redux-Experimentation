/**
 * Created by BlisS on 26/03/17.
 */
import express from 'express';
import path from 'path';
import open from 'open';

/*eslint-disable no-console*/

const port = 8000;
const app = express();

app.use(express.static('docs'));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '../docs/index.html'));
});

app.listen(port, function(err){
  if (err){
    console.log(err);
  } else{
    open(`http://localhost:${port}`);
  }
});
