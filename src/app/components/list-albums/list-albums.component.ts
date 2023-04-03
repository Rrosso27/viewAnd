import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Albums } from 'src/app/interfaces/albums';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent {
  listAlbums: Albums[] = []
  id:number;
  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.id = Number (route.snapshot.paramMap.get('id'))
  }


  ngOnInit (): void{
    this.getListAlbums(this.id)
}


  getListAlbums(id:number) {
    this.albumService.getListAlbums(id).subscribe((data) => {
      this.listAlbums = data
      console.log(data)
    })
  }

}
