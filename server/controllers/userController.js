import userModel from "../models/userModel.js";


export const users = async(req,res)=>{
    try {
        // const users = [
        //     { id: 1, name: "John Doe", email: "john@example.com", age: 17 },
        //     { id: 2, name: "Jane Doe", email: "jane@example.com", age: 16 },
        //     { id: 3, name: "Sam Smith", email: "sam@example.com", age: 15 },
        //   ];
          
          const users = await userModel.find({})
        res.status(200).json({
          success: true,
          message: "Users fetched successfully",
          data: users
        });
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Something went wrong",
            error
        })
    }
}

export const singleUser = async(req,res)=>{
    try {
        const { email } = req.body;
    
        if (!email) {
          return res.status(400).json({
            success: false,
            message: "Email is required",
          });
        }
    
        // Fetch user by email
        const user = await userModel.findOne({ email });
    
        // Check if the user was found
        if (!user) {
          return res.status(404).json({
            success: false,
            message: "User not found",
          });
        }
    
        // Return user details if found
        res.status(200).json({
          success: true,
          message: "User fetched successfully",
          data: user
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Something went wrong",
          error
        });
      }
}

// Function to insert a new user
export const insertUser = async (req, res) => {
    try {
      const { name, email, age } = req.body;
  
      // Check if all required fields are provided
      if (!name || !email || !age) {
        return res.status(400).json({
          success: false,
          message: "Name, email, and age are required",
        });
      }
  
      // Check if the user already exists
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "User already exists",
        });
      }
  
      // Create and save a new user
      const newUser = await new userModel({ name, email, age }).save();
  
      res.status(201).json({
        success: true,
        message: "User created successfully",
        data: newUser,
      });
  
    } catch (error) {
      console.error("Error in insertUser:", error); // Log the error to the console
  
      // Send a detailed error message back to the client for debugging
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.message, // Provide the error message in the response
      });
    }
  };

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, name, age } = req.body;

    if (!email || !name || !age) {
      return res.status(400).json({
        success: false,
        message: "Email, name, and age are required to update the user",
      });
    }
    const updatedUser = await userModel.findByIdAndUpdate(  id, { email, name, age }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};
