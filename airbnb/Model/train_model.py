import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import pickle

# load data
data = pd.read_csv("data.csv")

# features & target
X = data[["area", "distance", "amenities", "ambience"]]
y = data["rent"]

# split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# train model
model = LinearRegression()
model.fit(X_train, y_train)

# save model
with open("model.pkl", "wb") as f:
    pickle.dump(model, f)

print("Model trained and saved ✅")