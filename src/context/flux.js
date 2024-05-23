const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contactos: [],
      contactID: null
    },
    actions: {
      getContacts: async () => {
        try {
          const url = 'https://playground.4geeks.com/contact/agendas/nicolas/contacts'
          const options = {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
          }

          const response = await fetch(url, options)
          const datos = await response.json()
          setStore({ contactos: datos.contacts })
        } catch (error) {
          console.log(error.message)
        }
      },

      deleteContact: async (id) => {
        try {
          const store = getStore();

          const url = `https://playground.4geeks.com/contact/agendas/nicolas/contacts/${id}`;
          const options = {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json'
            }
          };
          const response = await fetch(url, options)

          if (response.status === 204) {
            console.log('Contacto eliminado:', id);
            
          }
          
          getActions().getContacts()

        } catch (error) {
          console.error('Error al eliminar contacto:', error)
        }

      },
      sendContact: (event, datos) => {
        event.preventDefault();
       
        const url = 'https://playground.4geeks.com/contact/agendas/nicolas/contacts';
        const options = {
          method: "POST",
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: datos.fullName,
            phone: datos.phone,
            email: datos.email,
            address: datos.address

          })
        };

        fetch(url, options)
          .then(response => response.json())
          .then(datos => {
            const { contactos } = getStore()
            setStore({ contactos: contactos.concat(datos) })
            const { cleanForm } = getActions()
            cleanForm()
            console.log('Contacto Agregado', datos);
            ;
          })
          .catch(error => console.error('Error al agregar tarea:', error));
      },

      editContact: (event, datos, id) => {
        try {
          const url = `https://playground.4geeks.com/contact/agendas/nicolas/contacts/${id}`
          const options = {
            method: "PUT",
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: datos.fullName,
            phone: datos.phone,
            email: datos.email,
            address: datos.address

          })
          }
          fetch(url, options)
          .then(response => response.json())
          .then(datos => {
            const { store } = getStore()
            setStore({
              ...store,
              contactID:null
            })
            const { cleanForm } = getActions()
            const { getContacts } = getActions()
            getContacts()
            cleanForm()
            console.log('Contacto Modificado', datos);
            ;
          })
        } catch (error) {
          
        }
      },

      cleanForm: () => {
        
      },
      editarContacto: (id) => {
        const { store } = getStore()
        setStore({
          ...store,
          contactID:id
        })
      }

    }
  }
}
export default getState;
