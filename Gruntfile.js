module.exports = function(grunt) {
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            scripts: {
                files: ["**/*.js"],
                tasks: ["uglify"],
                options: {
                    spawn: false,
                },
            }
        },
        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
            },
            build: {
                files: [{
                    expand: true,
                    cwd: "Admin/scripts",
                    src: "*.js",
                    dest: "Admin/build",
                    ext: ".min.js"
                },
                {
                    expand: true,
                    cwd: "Blog/scripts",
                    src: "*.js",
                    dest: "Blog/build",
                    ext: ".min.js"
                },
                {
                    expand: true,
                    cwd: "Contact/scripts",
                    src: "*.js",
                    dest: "Contact/build",
                    ext: ".min.js"
                },
                {
                    expand: true,
                    cwd: "ProfHistory/scripts",
                    src: "*.js",
                    dest: "ProfHistory/build",
                    ext: ".min.js"
                },
                {
                    expand: true,
                    cwd: "Projects/scripts",
                    src: "*.js",
                    dest: "Projects/build",
                    ext: ".min.js"
                }]
            },
        },
        eslint: {
            src: ["Admin/scripts/*.js", "Blog/scripts/*.js","Contact/scripts/*.js","ProfHistory/scripts/*.js","Projects/scripts/*.js"],
            options: {
                configfile: "conf/conig.json",
                rulePaths: ["conf/"]
            }
        }
        
    })
    
    
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks("grunt-contrib-uglify")
    grunt.loadNpmTasks("grunt-contrib-watch")
    grunt.loadNpmTasks("gruntify-eslint")
       
        
        
        
    
    // Default task(s).
    grunt.registerTask("default", ["uglify", "watch", "eslint"])
    
}