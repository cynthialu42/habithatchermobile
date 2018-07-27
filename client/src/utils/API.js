// import axios from "axios";

export default {
  getHabits: function() {
    return fetch("/api/habits").then(res => res.json());
  },
  getHabit: function(id){
      return fetch("/api/habits/" + id).then(res => res.json());
  },
  deleteHabit: function(id) {
      return fetch("/api/habits/" + id, {
          method: 'DELETE'
      });
  },
  saveHabit: function(habitData){
      return fetch("/api/habits", habitData, {
          method: 'POST'
      });
  },
  getEggs: function(){
      return fetch("/api/eggs").then(res => res.json());
  }, 
  getEgg: function(id){
      return fetch("/api/eggs/" + id).then(res => res.json());
  },
  updateCount: function(id, countData){
      return fetch("/api/habits/" + id, countData, {
          method: 'PUT'
      });
  }
};
