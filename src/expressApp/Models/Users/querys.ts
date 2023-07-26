user(parent, args, contextValue, info) {
    return users.find((user) => user.id === args.id);
  },

export function getUserById(_,{id}) {
    
}