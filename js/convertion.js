/* CONVERTION */
/* Functions to conver the files imported and Generate the queries.... */
/* author: Denis Sanchez leyva */
/* date: May 18, 2019 */

let importFileHeaderCA = 'data/headerColumnA.csv';
let importFileHeaderCB = 'data/headerColumnB.csv';
let headerCA = [];
let headerCB = [];

let importFileLinesCA = 'data/linesColumnA.csv';
let importFileLinesCB = 'data/linesColumnB.csv';
let linesCA = [];
let linesCB = [];


let importFileMembersCA = 'data/membersColumnA.csv';
let importFileMembersCB = 'data/membersColumnB.csv';
let membersCA = [];
let membersCB = [];

let importFileProvidersCA = 'data/providersColumnA.csv';
let importFileProvidersCB = 'data/providersColumnB.csv';
let providersCA = [];
let providersCB = [];

let status = 0;
let errores = [];


/* CALL FUNCTIONS SECTION AND CATCH ERRORS */

/* Convert Column A and B */
catchData(importFileHeaderCA)
.catch(err =>{
    console.log('error');
    console.error(err);
});
catchData(importFileHeaderCB)
.catch(err =>{
    console.log('error');
    console.error(err);
});

/* End Header */

/* Lines */
catchData(importFileLinesCA)
.catch(err =>{
    console.log('error');
    console.error(err);
});

catchData(importFileLinesCB)
.catch(err =>{
    console.log('error');
    console.error(err);
});

/*End Lines */


/* Members */
catchData(importFileMembersCA)
.catch(err =>{
    console.log('error');
    console.error(err);
});

catchData(importFileMembersCB)
.catch(err =>{
    console.log('error');
    console.error(err);
});

/* End Members */

/* Providers */
catchData(importFileProvidersCA)
.catch(err =>{
    console.log('error');
    console.error(err);
});
catchData(importFileProvidersCB)
.catch(err =>{
    console.log('error');
    console.error(err);
});

/* End Providers */
/* END CALL FUNCTIONS SECTION */




/* DEFINING FUNCTIONS */

 /***  catchData ***/

async function catchData(importFileName){
    const response = await fetch(importFileName);
    const dataNative = await response.text();
    const dataInArray = dataNative.split(/\r\n|\n/);
    fillColumnsArray(importFileName,dataInArray);


}

/* fillColumnsArray */

async function fillColumnsArray(fileName,arrayData){

     switch(fileName){
         case 'data/headerColumnA.csv': {
            headerCA = arrayData;
            break;
         }
         case 'data/headerColumnB.csv': {
            headerCB = arrayData;
            break;
         }
             
         case 'data/linesColumnA.csv': {
            linesCA = arrayData;
            break;
         }
         case 'data/linesColumnB.csv': {
            linesCB = arrayData;
            break;
         }

         case 'data/membersColumnA.csv': {
            membersCA = arrayData;
            break;
         }
         case 'data/membersColumnB.csv': {
            membersCB = arrayData;
            break;
         }
             
         case 'data/providersColumnA.csv': {
            providersCA = arrayData;
            break;
         }
         case 'data/providersColumnB.csv': {
            providersCB = arrayData;
            status = 1;
            break;
         }
         default : {
             console.log('Error');
         }        
     }

     createQueries();
}




function createQueries(){
   if (status === 1){
    /*** Header ***/
       if(headerCA.length != headerCB.length){
          let e = 'Error en Header -> The total of rows in Column A is different a Colum B';
          console.log(e);
          errores.push(e);
       
          console.log(errores);
       }

      // errores.push('Lines -> Las lines no coinciden');

       /* Print errores*/
       let listaErrs = '';
       for(let e = 0; e<errores.length; e++){
          listaErrs+=`<li> ${errores[e]}</li>`;
       }

       let h = '** Header **  SELECT '+headerCA[0].toUpperCase() + ' AS '+ headerCB[0].toUpperCase();
       let alias = '';


       for(let i=1; i<headerCA.length-1; i++){
          alias = headerCB[i].toUpperCase() !=='' ? headerCB[i].toUpperCase() : headerCA[i].toUpperCase();
          h+=`, ${headerCA[i].toUpperCase()} AS ${alias}`;
       }

       h+=' FROM ' ;
       document.querySelector('#headerArea').textContent = h;
       document.querySelector('#errors').innerHTML = `<ul>
           ${listaErrs}
       </ul>`;
          /*** End Header Query***/

    /*** Lines ***/
    if(linesCA.length !== linesCB.length){
        let e = 'Error en Lines -> The total of rows in Column A is different a Colum B';
        errores.push(e);
     }

   
     /* Print errores*/
     for(let e = 0; e<errores.length; e++){
        listaErrs+=`<li> ${errores[e]}</li>`;
     }

     let l = '** Lines **  SELECT '+linesCA[0].toUpperCase() + ' AS '+ linesCB[0].toUpperCase();
     alias = '';


     for(let i=1; i<linesCA.length-1; i++){
        alias = linesCB[i].toUpperCase() !=='' ? linesCB[i].toUpperCase() : linesCA[i].toUpperCase();
        l+=`, ${linesCA[i].toUpperCase()} AS ${alias}`;
     }

     l+=' FROM ' ;
     document.querySelector('#linesArea').textContent = l;
     document.querySelector('#errors').innerHTML = `<ul>
         ${listaErrs}
     </ul>`;
        /*** End Lines Query***/


        /*** Members ***/
        if(membersCA.length !== membersCB.length){
            let e = 'Error en Members -> The total of rows in Column A is different a Colum B';
            errores.push(e);
         }
    
       
         /* Print errores*/
         for(let e = 0; e<errores.length; e++){
            listaErrs+=`<li> ${errores[e]}</li>`;
         }
    
         let m = '** Members **  SELECT '+membersCA[0].toUpperCase() + ' AS '+ membersCB[0].toUpperCase();
         alias = '';
    
    
         for(let i=1; i<membersCA.length-1; i++){
            alias = membersCB[i].toUpperCase() !=='' ? membersCB[i].toUpperCase() : membersCA[i].toUpperCase();
            m+=`, ${membersCA[i].toUpperCase()} AS ${alias}`;
         }
    
         m+=' FROM ' ;
         document.querySelector('#membersArea').textContent = m;
         document.querySelector('#errors').innerHTML = `<ul>
             ${listaErrs}
         </ul>`;
            /*** End Members Query***/

        
        /*** Providers ***/
        if(providersCA.length !== providersCB.length){
            let e = 'Error en Providers -> The total of rows in Column A is different a Colum B';
            errores.push(e);
         }
    
       
         /* Print errores*/
         for(let e = 0; e<errores.length; e++){
            listaErrs+=`<li> ${errores[e]}</li>`;
         }
    
         let p = '** Providers **  SELECT '+providersCA[0].toUpperCase() + ' AS '+ providersCB[0].toUpperCase();
         alias = '';
    
    
         for(let i=1; i<providersCA.length-1; i++){
            alias = providersCB[i].toUpperCase() !=='' ? providersCB[i].toUpperCase() : providersCA[i].toUpperCase();
            p+=`, ${providersCA[i].toUpperCase()} AS ${alias}`;
         }
    
         p+=' FROM ' ;
         document.querySelector('#providersArea').textContent = p;
         document.querySelector('#errors').innerHTML = `<ul>
             ${listaErrs}
         </ul>`;
            /*** End Lines Query***/
    
        for(let d=0; d<errores.lenght; d++){
            errores.pop();
            console.log(errores);
        }

      
   }
}