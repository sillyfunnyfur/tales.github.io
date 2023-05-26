import os

def rename_images(folder_path):
    image_extensions = ['.jpg', '.jpeg', '.png', '.gif']  # Add more extensions if needed

    # Iterate over all files in the folder
    for filename in os.listdir(folder_path):
        file_ext = os.path.splitext(filename)[1].lower()

        # Check if the file is an image
        if file_ext in image_extensions:
            new_filename = filename.replace(" (", "").replace(")", "")
            image_path = os.path.join(folder_path, filename)
            new_image_path = os.path.join(folder_path, new_filename)

            # Rename the image file
            os.rename(image_path, new_image_path)
            print(f"Renamed '{filename}' to '{new_filename}'")

# Provide the folder path where the images are located
folder_path = 'img\octopath\cotc'
rename_images(folder_path)
