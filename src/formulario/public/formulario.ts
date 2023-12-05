const inputs = document.querySelectorAll<HTMLInputElement>('.form_input');

const saveBackup = document.getElementById('saveBackup') as HTMLButtonElement;
const saveDoc = document.getElementById('saveDoc') as HTMLButtonElement;
const deleteDoc = document.getElementById('deleteDoc') as HTMLButtonElement;

saveBackup.addEventListener('click', (e: any) => {
  console.log('Guardar respaldo');
});

saveDoc.addEventListener('click', () => {
  console.log('Guardar documento');
});

deleteDoc.addEventListener('click', () => {
  console.log('Borrar documento');
});

for (const input of inputs) {
  input.addEventListener('keyup', setValue);
}

function setValue(e: any) {
  console.log(e.target.attributes);
  const { secc, camp } = e.target.attributes;
  const { value } = e.target;
  console.log({ secc: secc.value, camp: camp.value, value });
}

function foo() {
  console.log('Hola');
}
