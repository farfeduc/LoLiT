module.exports = {

  tableName: 'data',
 
  attributes: {
    matchId: {
      type: 'integer',
      required: true
    },

    mapId: {
      type: 'integer'
    },

    participants: {
      type: 'array'
    },

    participantIdentities: {
      type: 'array'
    },

    teams:{
      type: 'array'
    },

    date: {
      type: 'date'
    }

  }
};
