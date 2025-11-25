import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing import image
import os

# --- CONFIGURATION ---
# We will use the new, modern model file
MODEL_PATH = 'models/image_model_v3.keras'

# We will use one of the fake images you provided for the test
TEST_IMAGE_PATH = r'C:\New Project\real_vs_fake\real-vs-fake\test\fake\0L1IDFAHRA.jpg'

print("--- STARTING FINAL DIAGNOSTIC SCRIPT ---")
print(f"TensorFlow Version: {tf.__version__}")
print(f"Looking for model at: {MODEL_PATH}")
print(f"Looking for image at: {TEST_IMAGE_PATH}")

# Check if files exist
if not os.path.exists(MODEL_PATH):
    print("\nFATAL ERROR: The model file was not found at the specified path.")
    exit()
if not os.path.exists(TEST_IMAGE_PATH):
    print("\nFATAL ERROR: The test image file was not found at the specified path.")
    exit()

try:
    # --- STEP A: ATTEMPT TO LOAD THE MODEL ---
    print("\nSTEP A: Attempting to load the model...")
    model = tf.keras.models.load_model(MODEL_PATH, compile=False)
    print("✅ SUCCESS: Model loaded successfully into memory.")

    # --- STEP B: ATTEMPT TO PREDICT ---
    print("\nSTEP B: Preprocessing the image...")
    test_image = image.load_img(TEST_IMAGE_PATH, target_size=(224, 224))
    image_array = image.img_to_array(test_image)
    image_array = np.expand_dims(image_array, axis=0)
    image_array /= 255.0
    print("Image preprocessed successfully.")

    print("\nSTEP C: Making a prediction...")
    prediction = model.predict(image_array)
    prediction_value = prediction[0][0]
    print(f"✅ SUCCESS: Prediction complete. Raw output value: {prediction_value}")

    # --- FINAL VERDICT ---
    print("\n--- FINAL VERDICT ---")
    if prediction_value < 0.35:
         print("RESULT: DEEPFAKE (Correctly Identified)")
    else:
         print("RESULT: REAL (Incorrectly Identified)")

except Exception as e:
    print("\n" + "="*50)
    print("     SCRIPT FAILED. THIS IS THE FINAL ROOT-CAUSE ERROR.")
    print("="*50)
    import traceback
    traceback.print_exc()
    print("="*50)