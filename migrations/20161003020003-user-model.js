"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('user',{
  		
        id: { type: DataTypes.INTEGER, autoIncrement: true, unique:true },
		    username: { type: DataTypes.STRING, unique:true },
        password: { type: DataTypes.STRING, unique:true },
        name: { type: DataTypes.STRING, unique:true },
        email: { type: DataTypes.STRING, unique:true },
		    
        updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        deleted_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  	},{
  		engine:'INNODB',
        timestamps: true,
        paranoid: true,
        underscored: true,
  	});
    
    done();
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable('user');
    
    done();
  }
};
