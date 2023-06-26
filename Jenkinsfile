pipeline {
  agent any
    
  tools {nodejs "Nodejs Helper"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/Raju-github-profile/nodejs-ci-cd.git'
      }
    }
     
    stage('Build') {
      steps {
        bat 'npm install'
      }
    }  
    
            
   
  }
}
