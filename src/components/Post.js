
class Posts{

    constructor(){
        this.post_loader = document.getElementById(`post-loader`);
    }
    /**
     * show all post
    */
    getPost(posts){

        let post = '';

        posts.map( (data, index) =>{

            let { Authname, Authphoto, Postcontent, Postphoto } = data;

            post += `<div class="row d-flex justify-content-center align-items-center mt-3">
                        <div class="col-sm-10 col-xl-6">
                            <div class="card shadow">
                                <div class="card-header">
                                    <div class="post-timeline-area d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <img style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover; display: block; float: left;" src="${Authphoto}" alt="">
                                            <h5 style="float: right;" class="ms-3">${Authname}</h5>
                                        </div>
                                        <button >...</button>
                                    </div>
                                    <hr>
                                    <div class="card-body">
                                        <p>${Postcontent}</p>
                                        <img class="w-100" src="${Postphoto}" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        })

        this.post_loader.innerHTML = post;

    }
}

let posts = new Posts;
export default posts;