import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'boxicons/css/boxicons.min.css';
import './index.css';

import ismail from './images/ismail.jpg';
import posts from './components/Post';
import Alert from './components/Alert';

const user_pp = document.getElementById(`user-pp`);

user_pp.setAttribute('src', ismail);

// creat_post_form 

document.querySelector(`.creat_post_form`).addEventListener(`submit`, setData);

document.addEventListener(`DOMContentLoaded`, getData)

function getData() {
    axios.get(`http://localhost:5050/posts`).then(res => posts.getPost(res.data))
}

function setData(e) {
    e.preventDefault();

    let msg = document.querySelector(`.msg`);

    let form_data = new FormData(e.target);
    let data = Object.fromEntries(form_data);

    let {Authname, Authphoto, Postcontent, Postphoto} = data;

    if ( Authname =='' || Authphoto == '' || Postcontent == '') {

        msg.innerHTML= Alert.danger(`All felid are requier`);

    } else {
        axios.post(`http://localhost:5050/posts`, data).then(res => {

            getData();

            msg.innerHTML = Alert.success(`Successfully Created Post`);

            document.querySelector(`.creat_post_form`).reset(e.target);
        })

    }

}