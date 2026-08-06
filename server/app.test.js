import request from "supertest";
import { afterEach,expect, test,vi } from "vitest";
import app from "./app";
import User from "./models/User";
afterEach(() =>{
    vi.restoreAllMocks();
});


test("GET /api/health returns the API status", async () =>{
    const response = await request(app)
    .get("/api/health");

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
        status: "ok",
        message: "User Management API is running"
    });
});

test("GET /api/users/:id returns 400 for an invalid ID",async () =>{
    const response = await request(app)
        .get("/api/users/not-a-valid-id");
    expect(response.status).toBe(400);

    expect(response.body).toEqual({
        message: "Invalid user ID"
    });
});
test("POST /api/users/ returns 400 when required fields are missing", async () =>{
    const response = await request(app)
        .post("/api/users")
        .send({});

    expect(response.status).toBe(400);

    expect(response.body).toEqual({
        message: "name,email and phone are required"
    });
});
test("GET /api/users returns the users", async () =>{
    const mockUsers = [
        {
            name: "Vikas",
            email: "vikas@example.com",
            phone: "9876543210"
        }
    ];

    vi.spyOn(User, "find").mockResolvedValue(mockUsers);

    const response = await request(app)
        .get("/api/users");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockUsers);
});
test("POST /api/users creates and returns a new user", async () =>{
    const userData = {
        name: "Rahul",
        email: "rahul@example.com",
        phone: "9999999999"
    };

    const createdUser ={
        _id: "507f1f77bcf86cd799439011",
        ...userData
    };

    vi.spyOn(User, "create").mockResolvedValue(createdUser);

    const response = await request(app)
        .post("/api/users")
        .send(userData);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(createdUser);
    expect(User.create).toHaveBeenCalledWith(userData);
});
test("POST /api/users returns 500 when user creation fails", async () =>{
    vi.spyOn(User, "create").mockRejectedValue(
        new Error("Database failure")
    );

    const response = await request(app)
        .post("/api/users")
        .send({
            name: "Rahul",
            email:"rahul@example.com",
            phone: "9999999999"
        });

    expect(response.status).toBe(500);

    expect(response.body).toEqual({
        message: "Unable to create user"
    });
});
test("GET /api/users/:id returns the selected user", async () =>{
    const userId = "507f1f77bcf86cd799439011";

    const mockUser = {
        _id: userId,
        name: "Vikas",
        email: "vikas@example.com",
        phone:"9876543210"
    };

    vi.spyOn(User, "findById").mockResolvedValue(mockUser);

    const response = await request(app)
    .get(`/api/users/${userId}`);

expect(response.status).toBe(200);
expect(response.body).toEqual(mockUser);

expect(User.findById).toHaveBeenCalledWith(userId);
});
test("GET /api/users/:id returns 404 when user is not found", async () => {
    const userId = "507f1f77bcf86cd799439011";

    vi.spyOn(User, "findById").mockResolvedValue(null);

    const response = await request(app)
        .get(`/api/users/${userId}`);

    expect(response.status).toBe(404);

    expect(response.body).toEqual({
        message: "User Not Found"
    });

    expect(User.findById).toHaveBeenCalledWith(userId);
});
test("PATCH /api/users/:id updates and returns the user", async () =>{
    const userId ="507f1f77bcf86cd799439011";

    const updateData = {
        name: "Vikas Kolla"
     };
     const updatedUser = {
        _id:userId,
        name: "Vikas Kolla",
        email: "vikas@example.com",
        phone: "9876543210"
    };

    vi.spyOn(User,"findByIdAndUpdate")
        .mockResolvedValue(updatedUser);

    const response = await request(app)
        .patch(`/api/users/${userId}`)
        .send(updateData);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(updatedUser);

    expect(User.findByIdAndUpdate).toHaveBeenCalledWith(
        userId,
        updateData,
        {
            returnDocument: "after",
            runValidators: true
        }
    );
});
test("DELETE /api/users/:id deletes and returns the user", async () => {
    const userId = "507f1f77bcf86cd799439011";

    const deletedUser = {
        _id: userId,
        name: "Vikas",
        email: "vikas@example.com",
        phone: "9876543210"
    };

    vi.spyOn(User, "findByIdAndDelete")
        .mockResolvedValue(deletedUser);

    const response = await request(app)
        .delete(`/api/users/${userId}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(deletedUser);

    expect(User.findByIdAndDelete)
        .toHaveBeenCalledWith(userId);
});
test("DELETE /api/users/:id returns 404 when user is not found", async () => {
    const userId = "507f1f77bcf86cd799439011";

    vi.spyOn(User, "findByIdAndDelete")
        .mockResolvedValue(null);

    const response = await request(app)
        .delete(`/api/users/${userId}`);
        expect(response.status).toBe(404);

    expect(response.body).toEqual({
        message: "User Not Found"
    });

    expect(User.findByIdAndDelete)
        .toHaveBeenCalledWith(userId);
});
test("PATCH /api/users/:id returns 400 when no fields are provided", async () =>{
    const userId = "507f1f77bcf86cd799439011";

    const updateSpy = vi
        .spyOn(User, "findByIdAndUpdate")
        .mockResolvedValue(null);

    const response = await request(app)
        .patch(`/api/users/${userId}`)
        .send({});

    expect(response.status).toBe(400);

    expect(response.body).toEqual({
        message: "At least one field is required"
    });

    expect(updateSpy).not.toHaveBeenCalled();
});