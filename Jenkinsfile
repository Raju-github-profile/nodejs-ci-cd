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
        sh 'npm install'
         sh 'npm run dev'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'npm run test'
        sh 'npm run test-report'
        sh 'npm run coverage'
      }
    }
  }
}
