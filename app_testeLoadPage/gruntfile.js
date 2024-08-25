module.exports = function(grunt) {

    // Configuração do projeto.
    grunt.initConfig({

    less: {
        development: {
          options: {
            paths: ['assets/css/result']
          },
          files: {
            'assets/css/result/estilo.css' :          // caminho da pasta de saida do arquivo ja convertido
            'assets/less/estilo.less'                // caminho da pasta do arquivo a ser convertido
          }
        }
      }, // less

      watch: {
        scripts: {
          files: ['**/*.css','**/*.less'],
          tasks: ['less','watch'],
          options: {
            spawn: true,
          }
        }
      } // watch

    }); 
  
    // Carrega os plugins das tarefas a serem execultadas.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Chama a tarefa(s).
    grunt.registerTask('default', ['less','watch']);
  
  };