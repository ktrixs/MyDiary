const express = require('express');
import { data } from '../models/entries';

const routes = () => {
    const diaryRouter = express.Router();

    diaryRouter.route('/')
    .post((req, res) => {
      let itemIds = data.map(item => item.id);
      let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
    
      let newMemory = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        notification: false,
        createdOn: new Date()
      };
    
      console.log(newMemory);
      data.push(newMemory);
      res.status(201).json(newMemory);
    })
      .get((req, res) => {
        data.find((err, memories) => {
          if(err) {
           return res.send(err);
          } 
          return res.json(memories);
        });
      });

      diaryRouter.use('/:id', (req, res, next) => {
        let found = data.find(function(item) {
          return item.id === parseInt(req.params.id);
        });
          if(found) {
            req.found = found;
            return next();
          }
           return res.sendStatus(404); 
      });
    
      diaryRouter.route('/:id')
      .get((req, res) => {
        res.json(req.found);
      })
      .put((req, res) => {
        const { data } = req;
            
        let updated = {
          title: req.body.title,
          content: req.body.content,
          notification: req.body.notification
        };
      
        let targetIndex = data.indexOf(found);

        data.splice(targetIndex, 1, updated);

        return res.send(201).json(data);
      });

      return diaryRouter;
}

module.exports = routes;