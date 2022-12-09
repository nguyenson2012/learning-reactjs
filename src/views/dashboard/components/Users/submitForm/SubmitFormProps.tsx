import User from '../User';

export default class SubmitFormProps {
  formName!: string;

  formDescription!: string;

  userInfo!: User;

  handleCloseSubmitFormDialog!: () => void;
}
