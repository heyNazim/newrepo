import Blog from "../models/blogModel.js";

export const createBlog = async (req, res) => {
    try {
        const { title, content, author, tags } = req.body;

        if (!title || !content) {
            return res.status(400).json({ message: 'Title, content are required.' });
        }

        // Create a new blog post
        const newBlog = new Blog({
            title,content,author, tags});

        const savedBlog = await newBlog.save();

        return res.status(201).json({
            message: 'Blog created successfully',
            blog: savedBlog,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error', error });
    }
};


export const allBlogs = async (req,res)=>{
    try {
        const bloglist = await Blog.find({})
        if(bloglist){
            res.status(200).send({
                success:true,
                message:"Get all blogs successfully",
                bloglist
            })
            
        }
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Something went wrong",
            error
        })
    }
}

export const updateBlog = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, content } = req.body;
  
      if (!title || !content) {
        return res.status(400).json({
          success: false,
          message: "title, content are required to update the Blog",
        });
      }
      const updateblog = await Blog.findByIdAndUpdate(  id, { title, content }, { new: true });
  
      if (!updateblog) {
        return res.status(404).json({
          success: false,
          message: "blog not found",
        });
      }
      res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: updateblog,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        error,
      });
    }
  };
  
export const deleteBlogs = async (req,res)=>{
    try {
        const { id } = req.params;

const deleteblog = await Blog.findByIdAndDelete(id)
        if(deleteblog){
            res.status(200).send({
                success:true,
                message:"Blog deleted successfully",
                blog:deleteblog
            })
        }
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Something went wrong",
            error
        })
    }
}



export const singleBlog = async(req,res)=>{
    try {
        const {id}= req.params.id
        const result  = await Blog.find({id})
        if(result.length > 0){
            res.status(200).send({
                success:true,
                message:"Get blog successfully",
                blog:result
            })
        }

    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Something went wrong",
            error
        }) 
    }
}