export class Movie {
    constructor(
        public id: number,
        public name: string,
        public genre: string,
        public image: string,
        public contentRating: number,
        public actorRating: number,
        public directorRating: number,
        public topicRating: number
    ) {}
}