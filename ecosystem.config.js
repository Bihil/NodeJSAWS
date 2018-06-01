
module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'NodeJS',
      script    : './index.js',
    }],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'ubuntu',
      host : '52.18.147.124',
      key  : '~/.ssh/FjarrMoodle.pem',
      ref  : 'origin/master',
      repo : 'https://github.com/Bihil/NodeJSAWS.git',
      path : '/home/ubuntu/NodeJS',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
  }
      }
    };
