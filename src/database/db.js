import mongoose from "mongoose";

const connectDatabase = () => {
    console.log("Espere a conexão com o banco de dados, por favor...");

    mongoose
        .connect( process.env.MONGODB_URI)
        .then(() => console.log("✅ MongoDB Atlas Conectado!"))
        .catch((error) => console.error("❌ Erro ao conectar ao MongoDB:", error));
};

export default connectDatabase;
//5vSJTTFozXm0w86L

//.connect("mongodb+srv://renanhumberto:5vSJTTFozXm0w86L@cluster0.iiuib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")