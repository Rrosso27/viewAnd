import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { User } from 'src/app/interfaces/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  listUser: User[] = []
  listPosts: Post[] = []


  constructor(private userService: UserService, private postService : PostService ) {

  }

  ngOnInit(): void {
    this.getListUser()

  }

  getListUser (){
    this.userService.getListUser().subscribe((data)=> {
      this.listUser = data
    })
  }

  getListPost( id:number) {
       this.postService.getListPost(id).subscribe((data)=>{
      this.listPosts = data
      console.log(data)
    })
  }


}
