import "./posts.scss"

const Posts = () => {

    const posts = [
        {
            id: 1,
            name: "John Doe",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/8088489/pexels-photo-8088489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "Lorem",
            img: "https://images.pexels.com/photos/8088685/pexels-photo-8088685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            name: "John Doe",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/8088489/pexels-photo-8088489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "Lorem so;ifa oasefh aopuefh awosif hawosfi hwaouef hwoasef howe"
        },
    ];

    return <div className="posts">
        {posts.map(post => (
                <Post post={post} key={post.id}/>
        ))}
    </div>
};