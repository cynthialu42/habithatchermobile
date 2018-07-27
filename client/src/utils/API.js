// import axios from "axios";

export default {
  getHabits: function() {
    return fetch("http://localhost:3001/api/habits").then(res => res.json());
  },
  getHabit: function(id){
      return fetch("http://localhost:3001/api/habits" + id).then(res => res.json());
  },
  deleteHabit: function(id) {
      return fetch("http://localhost:3001/api/habits" + id, {
          method: 'DELETE'
      }).then(res => res.json());
  },
  saveHabit: function(habitData){
      return fetch("http://localhost:3001/api/habits", {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(habitData)
      }).then(res => res.json());
  },
  getEggs: function(){
      return fetch("http://localhost:3001/api/eggs").then(res => res.json());
  }, 
  getEgg: function(id){
      return fetch(`http://localhost:3001/api/eggs/${id}`).then(res => res.json());
  },
  updateCount: function(id, countData){
      return fetch("/api/habits/" + id, {
          method: 'PUT',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(countData)
      }).then(res => res.json());
  }
};
