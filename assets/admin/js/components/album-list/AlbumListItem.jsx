import React from 'react';

class AlbumListItem extends React.Component {
    render() {
        const {album} = this.props;
        return (
            <div className="col s12 l4 m6">
                <div className="card small">
                    <div className="card-content">
                        <span className="card-title">{album.title}</span>
                        {(album.albumtype == 'user') ?
                            <div className="col s12 chip-col pl0">
                                <div className="chip connected-user">
                                    <img src={album.profile_picture} alt={album.username}/>
                                    <a target="_blank" href={"https://www.instagram.com/"+album.username}>
                                        {album.full_name ? album.full_name : album.username}
                                    </a>
                                </div>
                            </div>
                            :
                            <div className="col s12 chip-col pl0">
                                <div className="chip connected-user">
                                    <a target="_blank" href={"https://www.instagram.com/explore/tags/"+album.hashtag}>
                                        #{album.hashtag}
                                    </a>
                                </div>
                            </div>
                        }
                        <div className="col s12 pl0 top10">
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


// connect and export
export default AlbumListItem;
