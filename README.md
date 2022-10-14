# Introduction to Typescript  
### **Ways to Use This Tutorial**
If you are more interested in the ways that Typescript can help you develop working code faster, 
then you should check out the github website created from this repository. You can find it at [this location](https://cs401-fall2022.github.io/lesson14-bluetmn/). This will include a brief introduction to syntax and the benefits of typescripts warnings.

For functional ways to start projects using typescript, including ways to build and create the
correct environments, then read on below in this README file!  

### **Build Tools**  
Javascript and Typescript are very supported languages, therefore there are many different ways to build projects, 
including with Babel, Gulp, and more. In this setup, we will be using Gulp. 

# Environment Setup 
To begin, ensure that you are currently within the folder where you want your project to be. The project folder should contain two 
folders, a **/src** folder and a **/dist** folder. Src will hold the raw typescript files, and dist is where the compiled results 
will be placed.  

Type ```npm init``` to turn the folder into a npm package.  
Then, type  
```npm install -g gulp-cli```  
and  
```npm install --save-dev typescript gulp@4.0.0 gulp-typescript```  
to install the necessary gulp and typescript packages.  

In the src file, create a typescript file. In this example, src/hello.ts
holds a hello world function definition and then main.js calls that function after importing it. 

As described in the tutorial, a tsconfig.json file is needed to tell the compiler how to compile the typescript files. This will be
under the main project folder. See the above file or the tutorial for an example. 

A gulp file is also needed to correctly build the project. This will be located under the main project folder and called gulp.js. See the file for an example.  

# Run the Project 
To run the project, run ```gulp```, and then run ```node dist/main.js```  
You should see the hello world function output.  If you do, then congrats! You got the setup to work from the backend. Now let's use Browserify to get the code to the frontend.  

# Browserify 
First, install the necessary packages browserify, tsify, and vinyl-source-stream. See the command below:  
```npm install --save-dev browserify tsify vinyl-source-stream```  


Sources Used:  
- https://www.w3schools.com/cssref/pr_pos_overflow.asp  
- https://www.typescriptlang.org/docs/handbook/gulp.html  
- https://code.visualstudio.com/docs/typescript/typescript-compiling  
- https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html  
- https://www.markdownguide.org/cheat-sheet/

