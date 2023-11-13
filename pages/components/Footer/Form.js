import styles from "./Form.module.scss";
import { useForm, Controller } from "react-hook-form";
import Modal from "react-modal";
import { useState } from "react";

export default function Form() {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const [modalIsOpen, setIsOpen] = useState(false);

  const onSubmit = (formData) => {
    //  console.log(formData);
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={styles.newsletterContainer}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        overlayClassName={{
          base: styles.overlayBase,
          afterOpen: styles.overlayAfter,
          beforeClose: styles.overlayBefore,
        }}
        className={{
          base: styles.contentBase,
          afterOpen: styles.contentAfter,
          beforeClose: styles.contentBefore,
        }}
        closeTimeoutMS={500}
      >
        <h3>Successful registration</h3>
        <button onClick={closeModal} className={styles.submitButton}>
          Close
        </button>
      </Modal>
      <h2 className={styles.subscribeTitle}>Subscribe to our newsletter</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <button className={styles.submitButton} type="submit">
          SUBSCRIBE
        </button>
        <div className={styles.inputsColumn}>
          <div>
            <p className={styles.errorMessage}>
              {errors.name ? errors.name.message : ""}
            </p>
            <input
              className={styles.formInput}
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
            />
          </div>
          <div>
            <p className={styles.errorMessage}>
              {errors.email ? errors.email.message : ""}
            </p>
            <input
              className={styles.formInput}
              placeholder="Email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          <div>
            <p className={styles.errorMessage}>
              {errors.pet ? errors.pet.message : ""}
            </p>
            <Controller
              control={control}
              name="pet"
              defaultValue=""
              rules={{ required: "Pet is required" }}
              render={({ field }) => (
                <div className={styles.formSelect}>
                  <select {...field}>
                    <option value="" disabled>
                      Select a pet
                    </option>
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    <option value="hamster">Hamster</option>
                  </select>
                </div>
              )}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
