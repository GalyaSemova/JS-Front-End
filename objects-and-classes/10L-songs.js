function solve(input) {
    class Song {
        constructor(type, name, time ) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numOfSongs = input.shift();
    let listType = input.pop();

    for (let i = 0; i < numOfSongs; i++) {
        let [type, name, time] = input[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);  
        
    }

    if(listType === 'all') {
        songs.forEach(song => console.log(song.name));
    } else {
        songs.filter(song => song.type === listType)
               .forEach(song => console.log(song.name));
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )


solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    ) 
    
    
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )    