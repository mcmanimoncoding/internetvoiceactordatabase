import React from 'react'


class MovieRow extends React.Component {


    render() {
        return <table key={this.props.movie.imdbID}>
            
            <tbody>
                <tr>
                    <td>
                        <img width="100" src={this.props.movie.Poster} alt="poster" />
                    </td>
                    <td>
                        {this.props.movie.Title}
                        <br/>
                        {this.props.movie.Year}
                        {this.props.movie.imdbID}
                    </td>
                    <td>
                        {/* {this.props.movie.Plot} */}
                    </td>
                </tr>
            </tbody>
        </table>
    }
}



export default MovieRow