-- Step 1: Identify duplicate users based on name and email (same as before):
SELECT name, email, COUNT(*) AS duplicate_count
FROM users
GROUP BY name, email
HAVING COUNT(*) > 1;

-- Step 2: Update the attendance table to use the ID of the user you want to keep:
UPDATE attendance AS a
JOIN users AS u_keep ON a.user = u_keep.id
JOIN (
    SELECT MIN(id) AS keep_id, name, email
    FROM users
    GROUP BY name, email
    HAVING COUNT(*) > 1
) AS u_duplicates ON u_keep.name = u_duplicates.name AND u_keep.email = u_duplicates.email
JOIN users AS u_new ON u_new.name = u_duplicates.name AND u_new.email = u_duplicates.email
SET a.user = u_new.id
WHERE a.user = u_keep.id;

-- Step 3: Delete the duplicate users:
DELETE u
FROM users u
JOIN (
    SELECT MIN(id) AS keep_id, name, email
    FROM users
    GROUP BY name, email
    HAVING COUNT(*) > 1
) AS u_duplicates ON u.name = u_duplicates.name AND u.email = u_duplicates.email
WHERE u.id <> u_duplicates.keep_id