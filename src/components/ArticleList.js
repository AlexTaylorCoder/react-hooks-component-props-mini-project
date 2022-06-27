import Article from "./Article"
import blogData from "../data/blog"

function ArticleList() {
   const listArticle = blogData.posts.map(item=>
    <Article key={item.id} title={item.title} date={item.date} preview={item.preview}/>
    )
    return (
        <main>
        {listArticle}
        </main>
    )


}

export default ArticleList