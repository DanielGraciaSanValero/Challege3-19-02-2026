import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { MovieDto } from './dto/create-movie.dto'; // Ajusta la ruta a tu carpeta DTO
import { Movie } from './entities/movie.entity'; // O la interfaz que uses
/*import { Movie } from './movies.entity';*/

@ApiTags('movies')
@Controller('api/movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) { }

  @Get()
  async getMovies(): Promise<MovieDto[]> {
    return this.moviesService.listMovies();
  }
}
