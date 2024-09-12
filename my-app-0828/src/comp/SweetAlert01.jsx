import React from 'react';
import swal from 'sweetalert';

function SweetAlert01(props) {
    return (
        <>
         <button onClick={()=>{
            swal("Hello world!");
         }}>Hello</button>   
         <button onClick={()=>{
            swal("Here's the title!", "...and here's the text!");
         }}>Title, text</button>   
         <button onClick={()=>{
            swal("Good job!", '"warning", "error", "success","info"', "success");
         }}>Title, text, icon</button>   
         <button onClick={()=>{
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
              });
         }}>Title, text, icon with parameter</button>   
         <button onClick={()=>{
            swal("Good job!", "You clicked the button!", "success", {
                button: "Aww yiss!",
              });
         }}>버튼글자변경</button>   
         <button onClick={()=>{
            swal("Click on either the button or outside the modal.")
            .then((value) => {
              swal(`The returned value is: ${value}`);
            });
         }}>Promise 사용</button>   
         <button onClick={()=>{
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                  });
                } else {
                  swal("Your imaginary file is safe!");
                }
              });
         }}>buttons, dangerMode</button>   
         <button onClick={()=>{
            swal("Are you sure you want to do this?", {
                buttons: ["Oh noez!", "Aww yiss!"],
              }).then((value) => {
                swal(`The returned value is: ${value}`);
              });;
         }}>Customizing buttons</button>   
         <button onClick={()=>{
            swal("Are you sure you want to do this?", {
                buttons: ["Oh noez!", true],
              });
         }}>default text</button>   
         <button onClick={()=>{
            swal("A wild Pikachu appeared! What do you want to do?", {
                buttons: {
                  cancel: "Run away!",
                  catch: {
                    text: "Throw Pokéball!",
                    value: "catch",
                  },
                  defeat: true,
                },
              })
              .then((value) => {
                switch (value) {
               
                  case "defeat":
                    swal("Pikachu fainted! You gained 500 XP!");
                    break;
               
                  case "catch":
                    swal("Gotcha!", "Pikachu was caught!", "success");
                    break;
               
                  default:
                    swal("Got away safely!");
                }
              });
              
         }}>cancel and confirm</button>   
         <button onClick={()=>{
            swal({
                text: 'Search for a movie. e.g. "La La Land".',
                content: "input",
                button: {
                  text: "Search!",
                  closeModal: false,
                },
              })
              .then(name => {
                if (!name) throw null;
               
                return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
              })
              .then(results => {
                return results.json();
              })
              .then(json => {
                const movie = json.results[0];
               
                if (!movie) {
                  return swal("No movie was found!");
                }
               
                const name = movie.trackName;
                const imageURL = movie.artworkUrl100;
               
                swal({
                  title: "Top result:",
                  text: name,
                  icon: imageURL,
                });
              })
              .catch(err => {
                if (err) {
                  swal("Oh noes!", "The AJAX request failed!", "error");
                } else {
                  swal.stopLoading();
                  swal.close();
                }
              });
         }}>AJAX requests</button>   
         <button onClick={()=>{
            swal("Write something here:", {
                content: "input",
              })
              .then((value) => {
                swal(`You typed: ${value}`);
              });
         }}>Using DOM nodes as content</button>   
        </>
    );
}

export default SweetAlert01;