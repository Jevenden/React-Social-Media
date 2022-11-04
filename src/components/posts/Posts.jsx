import Post from "../post/Post"
import "./posts.scss"

const Posts = () => {

    const posts = [
        {
            id: 1,
            name: "John Doe",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem",
            img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 2,
            name: "Jane Doe",
            userId: 2,
            profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem so;ifa oasefh aopuefh awosif hawosfi hwaouef hwoasef howe"
        },
    ];

    return <div className="posts">
        {posts.map(post => (
                <Post post={post} key={post.id}/>
        ))}
    </div>
};

export default Posts